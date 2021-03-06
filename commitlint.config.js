module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        // 影响构建与发布的变动
        'build',
        // ci配置文件和脚本的更改
        'ci',
        // 文档改变
        'docs',
        // 新特性
        'feat',
        // 修复bug
        'fix',
        // 性能优化
        'perf',
        // 某个已有功能重构
        'refactor',
        // 撤销上一次的commit
        'revert',
        // 代码风格改变
        'style',
        // 测试文件的变动
        'test',
      ],
    ],
    'scope-enum': [
      'generator',
      'templates',
      'coder',
    ],
  },
};
