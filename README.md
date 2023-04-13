
ToolJet是一个**开源低代码框架**，可以用最少的工程工作量快速构建和部署内部工具。ToolJet的拖放式前端构建器允许您在几分钟内构建复杂的响应式前端。您还可以连接到数据源，如数据库（PostgreSQL、MongoDB、Elasticsearch等）、API端点（ToolJet支持导入OpenAPI规范和OAuth2授权）、SaaS工具（Stripe、Slack、Google Sheets、Airtable、Notion等）和对象存储服务（S3、GCS、Minio等），以获取和写入数据。

![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/tooljet/tooljet-ce)
[![GitHub license](https://img.shields.io/github/license/ToolJet/ToolJet)](https://github.com/ToolJet/ToolJet)


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

## 快速试用
[ToolJet_cn](http://yun.mousheng.top:8082/)<br>

## 快速私有部署

请确保安装了Docker，如果没有请自行百度一下如何安装docker

```bash
docker run \
  --name tooljet_cn \
  --restart unless-stopped \
  -p 80:80 \
  -v tooljet_data:/var/lib/postgresql/13/main \
  tooljet/try:latest
```

## Tutorials and examples

[GitHub contributor leaderboard using ToolJet](https://blog.tooljet.io/building-a-github-contributor-leaderboard-using-tooljet/)<br>
[Cryptocurrency dashboard using ToolJet](https://blog.tooljet.com/how-to-build-a-cryptocurrency-dashboard-in-10-minutes/)<br>
[WhatsApp CRM using ToolJet](https://blog.tooljet.com/build-a-whatsapp-crm-using-tooljet-within-10-mins/)<br>
[AWS S3 file explorer](https://blog.tooljet.com/building-an-app-to-view-and-upload-files-in-aws-s3-bucket/)<br>

## 文档
[官方英文文档](https://docs.tooljet.com)<br>
[HuangWanddy翻译的中文文档](https://tdoc.xhrjy.cn/docs/contributing-guide/setup/docker)<br>



## Community support
For general help using ToolJet, please refer to the official [documentation](https://docs.tooljet.com/docs/). For additional help, you can use one of these channels to ask a question:

- [Slack](https://tooljet.com/slack) - Discussions with the community and the team.
- [GitHub](https://github.com/ToolJet/ToolJet/issues) - For bug reports and feature requests.
- [Twitter](https://twitter.com/ToolJet) - Get the product updates easily.

## Roadmap
Check out our [roadmap](https://github.com/ToolJet/ToolJet/projects/2) to get informed of the latest features released and the upcoming ones.


## 贡献者
<a href="https://github.com/tooljet/tooljet/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=tooljet/tooljet&max=300&columns=20" />
  <img src="https://us-central1-tooljet-hub.cloudfunctions.net/github" width="0" height="0" />
</a>

## 许可证
ToolJet © 2022, ToolJet Solutions Inc - Released under the GNU Affero General Public License v3.0.
