ToolJet是一个**开源低代码框架**，可以用最少的工程工作量快速构建和部署内部工具。ToolJet的拖放式前端构建器允许您在几分钟内构建复杂的响应式前端。您还可以连接到数据源，如数据库（PostgreSQL、MongoDB、Elasticsearch等）、API端点（ToolJet支持导入OpenAPI规范和OAuth2授权）、SaaS工具（Stripe、Slack、Google Sheets、Airtable、Notion等）和对象存储服务（S3、GCS、Minio等），以获取和写入数据。

![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/tooljet/tooljet-ce)
[![GitHub license](https://img.shields.io/github/license/ToolJet/ToolJet)](https://github.com/ToolJet/ToolJet)

### **因本人精力和能力有限，兼容性暂未作测试，不建议将本软件用作生产环境**

<p align="center">
    <img src="docs/static/img/temp/index.png"/>

</p>


<p align="center">  
  <kbd>
    <img src="docs/static/img/temp/builder.png"/>

  </kbd>
</p>

## 所有功能

- **可视化应用程序生成器:** 40多个内置组件，如表格、图表、列表、窗体、进度条等
- **ToolJet 数据库:** 内置无代码数据库.
- **多页面:** 生成一个包含任意页面的应用程序
- **多人编辑:** 多个用户可以同时使用应用程序生成器.
- **40+ 数据源:** 可连接到40+外部数据库、云存储和api.
- **桌面端 & 移动端:** 可以自定义布局宽度以支持不同的屏幕.
- **私有部署:** (支持 Docker, Kubernetes, Heroku, AWS EC2, Google Cloud Run, 等等).
- **合作:** 在画布上的任何位置添加评论，并标记您的团队成员.
- **使用插件进行扩展:** 使用 [commandline tool](https://www.npmjs.com/package/@tooljet/cli) 轻松生成新的扩展.
- ** 版本控制:** 每个应用程序都有不同的版本，并有适当的发布周期.
- **运行 JS & Python 代码:** 可运行自定义的JS及Python代码.
- **细粒度访问控制** 组级别和应用程序级别的细粒度访问控制.
- **低代码:** 几乎在生成器中的任何位置编写js代码例如，文本的颜色属性可以设置为`status === 'success' ? 'green' : 'red'`
- **零代码查询编辑器:** 用于所有支持的数据源.
- **连接和转换数据:** 可使用javascript/python代码转换查询结果.
- **安全:** 所有凭据都使用安全加密 `aes-256-gcm`.
- **不存储数据:**tool jet仅充当代理，不存储任何数据.
- **SSO:** 支持多个SSO提供程序

<hr>

# 主要修改
- **拼音检索:** 单选框、多选框添加全拼、首拼搜索的支持
<p align="center">
    <img src="docs/static/img/temp/拼音检索.gif"/>
</p>

- **组件面板搜索描述:** 组件面板支持描述的搜索

- **添加签字组件:** 添加签字组件，支持裁剪、自定义钢笔颜色、单步撤销
<p align="center">
    <img src="docs/static/img/temp/签字.gif"/>
</p>

- **添加音频播放器组件:** 添加音频播放器组件,支持设置自动播放(因Google浏览器限制，浏览器需打开允许媒体自动播放选项)、循环以及代码加载新的音频源、代码控制播放状态
- **添加视频播放器组件:** 添加视频播放器组件，支持海报显示、自动播放（因Google浏览器限制，自动播放收到限制，可设置自动播放且默认静音）、循环播放，可代码控制播放状态、全屏、加载视频，以及播放、暂停、结束时事件响应
<p align="center">
    <img src="docs/static/img/temp/videoplay.gif"/>
</p>

- **添加二维码生成组件:** 添加二维码生成组件，支持渲染类型、纠错等级、填充颜色等属性的设置
- **添加Echarts组件:** 添加Echarts组件，支持3D图表，支持响应鼠标点击事件

<p align="center">
    <img src="docs/static/img/temp/echart.gif"/>
</p>

- **添加高德地图组件:** 复刻原Google地图组件所有功能，并添加比例尺、定位当前位置、右键删除标记事件等功能，(地名搜索补全没反应的话，是因为免费API调用上限只有100次/天，请更换自己的api即可正常使用)
<p align="center">
    <img src="docs/static/img/temp/amap.gif"/>
</p>

- **导航栏隐藏:** 当所有页面都为隐藏时，导航栏自动隐藏




- **汉化:** 对绝大部分界面、组件做了深度汉化
- **符合国内习惯:** 修改npm国内源、日期格式改为YYYY/mm/dd
- **符合国内习惯:** 修改npm国内源、日期格式改为YYYY/mm/dd


## 快速试用
[ToolJet_cn](http://124.222.215.115:8082/)<br>

## 一键私有部署

请确保安装了Docker，如果没有请自行百度一下如何安装docker,在linux下或window的WSL模式下输入以下代码

```bash
# 配置环境变量
wget -O autoConfigure.sh https://yun.mousheng.top/tooljet/autoConfigure.sh && chmod 755 autoConfigure.sh && bash autoConfigure.sh
# 运行镜像
docker-compose up -d
```
## 一键二次开发
使用Docker镜像二次开发，可避免本机软件环境造成启动或者安装失败，复制以下代码即可快速开始
```bash
#克隆代码到本地，切换到代码根目录，运行develop_tooljet_in_ubuntu_by_mou.sh即可
./develop_tooljet_in_ubuntu_by_mou.sh
```


## 文档
[HuangWanddy翻译的中文文档](https://tdoc.xhrjy.cn/docs/contributing-guide/setup/docker)<br>
[官方英文文档](https://docs.tooljet.com)<br>

<hr>
#############################以下均为英文社区###############################
## 社区支持
有关使用tooljet的一般帮助，请参阅官方网站 [文档](https://docs.tooljet.com/docs/). 要获得更多帮助，您可以使用其中一个渠道提问:

- [Slack](https://tooljet.com/slack) - 与社区和团队的讨论
- [GitHub](https://github.com/ToolJet/ToolJet/issues) - 用于错误报告和功能请求.
- [Twitter](https://twitter.com/ToolJet) - 轻松获取产品更新.

## 路线图
查看我们的[roadmap](https://github.com/ToolJet/ToolJet/projects/2) 了解发布的最新功能和即将推出的功能


## 贡献者
<a href="https://github.com/tooljet/tooljet/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=tooljet/tooljet&max=300&columns=20" />
  <img src="https://us-central1-tooljet-hub.cloudfunctions.net/github" width="0" height="0" />
</a>

## 许可证
ToolJet © 2022, ToolJet Solutions Inc - Released under the GNU Affero General Public License v3.0.
