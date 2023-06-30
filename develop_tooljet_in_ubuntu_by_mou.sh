#/bin/bash

# 本脚本用于Ubuntu下一键二次开发tooljet
# 原理就是使用docker镜像生成客户端和服务端及数据库
# 无需在Ubuntu系统中安装node、Python、数据库等
# 但请确保Ubuntu已安装docker
# 如不想开启自带数据库，可注释下面的两块代码段,最后docker编译命令需要权限，记得启动加上sudo
# 默认完全重建tooljet_cn
# r 重启docker
# rb 重新编译docker


if [ "$1" = "" ];
then
echo "重建tooljet_cn"
echo "正在拉取镜像"
# pull镜像
docker pull node:18.3.0-buster
docker pull postgrest/postgrest:v10.1.1.20221215
docker pull postgres:13

# 删除原docker
docker-compose down

# 复制环境变量文件
cp .env.example .env
# cp .env.example .env.test

SECRET_KEY_32=$(openssl rand -hex 32)
SECRET_KEY_64=$(openssl rand -hex 64)

envFile='.env'
sed -i "s/^LOCKBOX_MASTER_KEY=.*/LOCKBOX_MASTER_KEY=$SECRET_KEY_32/g" $envFile
sed -i "s/^SECRET_KEY_BASE=.*/SECRET_KEY_BASE=$SECRET_KEY_64\nNODE_ENV=development/g" $envFile
sed -i "s/^SERVER_HOST=.*/SERVER_HOST=localhost/g" $envFile
sed -i "s/^ORM_LOGGING=.*/ORM_LOGGING=all/g" $envFile
sed -i "s/^PG_DB=.*/PG_DB=tooljet_development/g" $envFile
sed -i "s/^PG_USER=.*/PG_USER=postgres/g" $envFile
sed -i "s/^PG_HOST=.*/PG_HOST=postgres\nPG_PORT=5432/g" $envFile
sed -i "s/^PG_PASS=.*/PG_PASS=postgres/g" $envFile
# 开启自带数据库，不想开启则注释以下内容
sed -i "s/^ENABLE_TOOLJET_DB=.*/ENABLE_TOOLJET_DB=true/g" $envFile
sed -i "s/^TOOLJET_DB=.*/TOOLJET_DB=tooljet_db/g" $envFile
sed -i "s/^TOOLJET_DB_USER=.*/TOOLJET_DB_USER=postgres/g" $envFile
sed -i "s/^TOOLJET_DB_HOST=.*/TOOLJET_DB_HOST=postgres\nTOOLJET_DB_PORT=5432/g" $envFile
sed -i "s/^TOOLJET_DB_PASS=.*/TOOLJET_DB_PASS=postgres/g" $envFile
sed -i "s/^PGRST_HOST=.*/PGRST_HOST=postgrest:3000\nPGRST_LOG_LEVEL=info\nPGRST_DB_URI=postgres:\/\/postgres:postgres@postgres:5432\/tooljet_db/g" $envFile
sed -i "s/^PGRST_JWT_SECRET=.*/PGRST_JWT_SECRET=$SECRET_KEY_32/g" $envFile
# end
# 默认打开集成/市场
sed -i "s/^ENABLE_MARKETPLACE_FEATURE=.*/ENABLE_MARKETPLACE_FEATURE=true\nENABLE_MARKETPLACE_DEV_MODE=true/g" $envFile



# envFile='.env.test'
#写入.env.text环境变量
# sed -i "s/^LOCKBOX_MASTER_KEY=.*/LOCKBOX_MASTER_KEY=$SECRET_KEY_32/g" $envFile
# sed -i "s/^SECRET_KEY_BASE=.*/SECRET_KEY_BASE=$SECRET_KEY_64\nNODE_ENV=test/g" $envFile
# sed -i "s/^SERVER_HOST=.*/SERVER_HOST=localhost/g" $envFile
# sed -i "s/^ORM_LOGGING=.*/ORM_LOGGING=error/g" $envFile
# sed -i "s/^PG_DB=.*/PG_DB=tooljet_development/g" $envFile
# sed -i "s/^PG_USER=.*/PG_USER=postgres/g" $envFile
# sed -i "s/^PG_HOST=.*/PG_HOST=postgres\nPG_PORT=5432/g" $envFile
# sed -i "s/^PG_PASS=.*/PG_PASS=postgres/g" $envFile

# 开启自带数据库，不想开启则注释以下内容
# sed -i "s/^ENABLE_TOOLJET_DB=.*/ENABLE_TOOLJET_DB=true/g" $envFile
# sed -i "s/^TOOLJET_DB=.*/TOOLJET_DB=tooljet_db/g" $envFile
# sed -i "s/^TOOLJET_DB_USER=.*/TOOLJET_DB_USER=postgres/g" $envFile
# sed -i "s/^TOOLJET_DB_HOST=.*/TOOLJET_DB_HOST=postgres\nTOOLJET_DB_PORT=5432/g" $envFile
# sed -i "s/^TOOLJET_DB_PASS=.*/TOOLJET_DB_PASS=postgres/g" $envFile
# sed -i "s/^PGRST_HOST=.*/PGRST_HOST=postgrest:3000\nPGRST_LOG_LEVEL=info\nPGRST_DB_URI=postgres:\/\/postgres:postgres@postgres:5432\/tooljet_db/g" $envFile
# sed -i "s/^PGRST_JWT_SECRET=.*/PGRST_JWT_SECRET=$SECRET_KEY_32/g" $envFile
# end
docker-compose build
docker-compose run --rm  plugins npm run build:plugins
docker-compose up
fi

if [ "$1" == "r" ];
then
echo "仅重启tooljet_cn docker"
docker-compose restart
fi

if [ "$1" == "rb" ];
then
echo "重新编译 tooljet_cn"
docker-compose build
docker-compose run --rm  plugins npm run build:plugins
docker-compose up
fi

# 生产模式的打包推送镜像命令
# version=v2.62
# docker build -f ./docker/production.Dockerfile -t moushengkoo/tooljet_cn:${version} .
# docker push moushengkoo/tooljet_cn:${version}
# docker tag moushengkoo/tooljet_cn:${version} moushengkoo/tooljet_cn:latest
# docker push moushengkoo/tooljet_cn:latest


