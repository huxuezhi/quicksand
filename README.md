# quicksand
> 就算再差，也得去尝试

## 项目列表:
- ### [@quicksand/generator](./packages/generator) 项目整体一键生成器。具有以下特性：
  - [ ] 支持按整体目录结构编译模板
  - [ ] 支持递增编译、覆盖编译、干净的编译（删除原产物，在编译）
  - [ ] 支持目录和文件通过`globs`匹配编译及过滤编译
  - [ ] 支持编译后生命周期的钩子事件
  - [ ] 支持编译后的代码风格修复
  - [ ] 支持通过目录名、文件名进行循环编译
  - [ ] 支持通过目录名、文件名进行合并编译
  - [ ] 支持通过跳过媒体文件的内容编译
  - [ ] 支持通过目录配置文件、文件元数据（类似静态博客MD文件元数据）进行条件、循环等复杂编译
  - [ ] 支持`JavaScript/TypeScript`、`Node`体系的项目
  - [ ] 支持`Dart`、`Flutter`体系的项目
  
- ### [@quicksand/templates](./packages/templates) 基于`@quicksand/generator`的模板组项目。计划中模板列表如下：
  - [ ] 基于NestJS的后端模板
    - [ ] 支持生成`TypeORM`的实体
    - [ ] 支持`Prisma`
    - [ ] 内置JWT鉴权
    - [ ] 支持基于`Prisma`的代码优先的`Graphql`接口生成
    - [ ] 支持基于`Prisma`的`RESTful`风格接口生成