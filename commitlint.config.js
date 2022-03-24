module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能（feature）
        'fix', // 修补bug
        'docs', // 文档（documentation）
        'style', // 格式（不影响代码运行的变动）
        'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
        'perf', // 改善性能
        'test', // 测试
        'chore', // 变更构建流程或辅助工具
        'ci', // 持续集成修改
        'revert' // 回退
      ]
    ]
  }
}
