# The First

[English](README.md) | 中文

The First 是一组面向 AI 编程工具的软件开发流程 Skills。它让 AI 在理解需求、体验、技术和部署边界后再开始开发，并在每个阶段与功能切片中保留人的验收权。

## 适用场景

- 从模糊想法初始化新项目。
- 为已有项目增加较大功能或重新梳理开发方向。
- 在技术栈尚未决定时比较 Web、App、服务、SEO、性能和部署需求。
- 先通过最简原型验证功能和交互，再决定生产实现。
- 将大功能拆为可测试、可验收、可独立提交的功能切片。
- 在新对话中恢复需求、决策、反馈规则、进度和下一步。
- 在部署前确认环境、构建、迁移、健康检查与回滚方案。

## 核心原则

1. 先调查，后提问；先确认目标，后选择技术。
2. 优先复用项目已有 PRD、任务、设计、接口、测试、配置和运行手册。
3. `THE-FIRST.md` 只记录流程状态和文档索引，不复制第二套需求或技术文档。
4. 需求、体验、技术方案、功能切片和部署均由用户在关键门禁验收。
5. 任何软件安装、外部写入、代码推送或生产部署都需要对应授权。
6. 用户修改先被提炼为可复用规则，再进入代码、验收和回归保护。
7. 功能通过验证和用户验收后，按功能创建独立 Git 提交。
8. 每个完成步骤都报告成果、验证证据、建议用户操作和下一步。

## 工作流程

```text
开始或续接
  → 调查项目规则、Git 和既有真相源
  → 建立 THE-FIRST.md 索引
  → 澄清并验收需求
  → 设计并验收体验，可选最简原型
  → 确定技术方案、组件策略和部署初案
  → 检查环境，获授权后安装缺失项
  → 逐个开发、测试和验收功能切片
  → 将用户反馈固化为防回归规则
  → 按功能提交 Git
  → 获授权后部署、验证和准备回滚
```

The First 默认不连续执行所有阶段。AI 会在阶段和功能切片的验收点等待用户反馈。用户可以预先授权一个边界清晰的小批次，但不会因此开启无限自动开发。

## Skills

| Skill | 用途 |
|---|---|
| `using-the-first` | 识别新项目或续接项目，读取规则、Git、`THE-FIRST.md` 和真相源，并路由到当前阶段 |
| `guard-artifact-scope` | 区分产品内容、用户边界、工程约束、流程规则和验证要求，避免把开发指令当成产品成果 |
| `clarify-project-requirements` | 澄清目标、用户、范围、品牌名、工程名、关键需求和验收标准 |
| `design-product-experience` | 设计信息结构、视觉方向、交互状态和可选最简原型 |
| `design-technical-solution` | 决定技术栈、系统边界、组件策略、测试方法、部署初案并检查环境 |
| `develop-feature-slices` | 拆分和实施可验收功能切片，补齐测试、自测、反馈防回归和功能提交 |
| `deploy-project` | 在明确授权下实施部署、迁移、健康检查、业务验收和回滚 |
| `track-project-progress` | 维护跨对话可恢复的状态、索引、切片、反馈和验证证据 |

`guard-artifact-scope` 是跨阶段守卫。AI 在产物混合了产品内容与开发约束时按需隐式调用；用户无需显式触发，它也不会增加单独的阶段或验收门禁。

## 项目真相源与文档模式

The First 不假设某个文件能代表整个项目。它按领域识别真相源，例如：

- 需求：已验收 PRD、任务或产品决策。
- 视觉：已确认设计稿、设计系统或现有产品行为。
- 接口和数据：schema、类型、迁移与契约测试。
- 部署：基础设施、CI、容器和运行手册。
- 实现状态：源码、测试、Git 提交和实际运行证据。

初始化时可以选择：

- `index_only`：默认，只建立索引，不移动文档。
- `normalize_in_place`：原位整理标题、状态和交叉链接，不改变路径。
- `structural_migration`：先输出精确迁移方案，获批准后再移动或合并文档，并单独提交。

如果项目没有可复用的文档位置，才回退到：

- `docs/project/requirements.md`
- `docs/project/experience.md`
- `docs/project/technical-solution.md`
- `docs/project/deployment-runbook.md`

## 跨对话续接

The First 在项目根目录维护版本控制内的 `THE-FIRST.md`。新对话会先读取它、项目级指令、Git 状态和它链接的真相源，再恢复工作。

状态文件包含：

- 项目身份与当前阶段。
- 文档真相源索引。
- 已确认决策和阻塞问题。
- 功能切片、验收、测试和提交证据。
- 用户反馈防回归规则。
- 外部任务链接。
- 下一次对话应读取的内容和下一动作。

它不保存凭据、生产密钥、大段聊天记录或已有文档的完整副本。

## 最简原型

原型是可选项，只用于验证功能入口、信息结构和交互：

- 不实现正式后端、权限体系或数据库。
- 使用静态 mock 数据。
- 已有前端工程时优先复用其展示能力。
- 新项目的简单原型使用 HTML、CSS 和 JavaScript。
- 只有交互确实复杂时才使用 Vue 3 + Vite。
- 原型技术不会自动成为生产技术栈。

## 环境与安装授权

技术方案通过用户验收后，AI 才检查方案真正需要的环境。缺失项会按“必须、推荐、可选、无法验证”分类，并说明用途、命令、影响范围、验证方式和回退方法。用户可以批准全部、只批准指定项、自行安装、拒绝安装或修改技术方案。

## 分步开发与 Git

每个功能切片必须有可观察结果、范围、验收标准、自动化验证和用户自测流程。用户验收前不把切片标记为完成；用户提出修改时，AI 会记录底层意图、长期规则、受影响范围和回归保护。

功能验收后才创建功能提交。AI 会检查工作区和暂存区，只提交相关路径或 hunk，不覆盖或混入其他未提交改动。项目代码默认不推送，除非用户对该项目明确授权。

## 安装

### Codex

```powershell
codex plugin marketplace add railgun20001/the-first
codex plugin add the-first@the-first
```

检查：

```powershell
codex plugin list --json
```

### Claude Code

```powershell
claude plugin marketplace add railgun20001/the-first
claude plugin install the-first@the-first
```

检查：

```powershell
claude plugin list
claude plugin details the-first@the-first
```

### 其他 Agent Skills 工具

克隆本仓库，并按工具自身说明把 `skills/` 中的目录加入其 Skills 搜索路径。不同工具对自动触发、交互提问和任务列表的能力不同；The First 会在能力缺失时退化为普通对话和文件操作。本项目不对尚未实际验证的具体工具声明原生兼容。

## 卸载

Codex：

```powershell
codex plugin remove the-first@the-first
codex plugin marketplace remove the-first
```

Claude Code：

```powershell
claude plugin uninstall the-first@the-first
claude plugin marketplace remove the-first
```

卸载插件不会删除项目中的 `THE-FIRST.md` 或项目文档。

## 边界

The First 不提供后台服务、遥测、MCP、数据库或自动托管。它不强制 GitHub Issues、Linear、技术框架、UI 库或部署厂商，也不会在未授权时创建云资源、修改生产环境或替用户接受成果。

## 许可证

[MIT](LICENSE)
