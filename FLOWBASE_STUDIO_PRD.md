# FLOWBASE_STUDIO_PRD.md

# FlowBase Studio (FBS)

## Vision

FlowBase Studio（简称 FBS）是 FlowBase 生态核心产品。

FBS 不是导航站。

FBS 不是资源收录站。

FBS 的核心定位：

# The Visual Workspace for Claude Code

中文定位：

中国首个 Claude Code 中文可视化工作台。

---

## Product Mission

让用户无需学习：

* settings.json
* CLAUDE.md
* MCP 配置
* Skills 文件
* Rules 文件

通过可视化界面即可完成 Claude Code 项目构建。

---

## Product Positioning

传统方式：

安装 Claude Code

↓

学习命令

↓

学习 MCP

↓

学习 Skills

↓

学习 Rules

↓

编辑配置文件

↓

项目才能运行

---

FBS 方式：

打开 Studio

↓

选择 MCP

↓

选择 Skills

↓

选择 Rules

↓

点击 Generate

↓

获得完整 Claude Code 项目

---

## Core Value

FBS = Claude Code + Visual Workspace

目标：

成为中文用户使用 Claude Code 的第一入口。

不是最大的资源库。

而是最容易使用 Claude Code 的平台。

---

# Technical Stack

Framework

* Astro

Language

* TypeScript

Styling

* TailwindCSS

Content

* MDX

Database

* PostgreSQL

ORM

* Drizzle ORM

Search

* Pagefind

Deployment

* VPS
* PM2

禁止使用：

* Next.js
* Nuxt
* Laravel
* Vue

除非后续明确升级架构。

---

# Design System

Follow FlowBase Design Language

Keywords

* Dark
* Industrial
* Premium
* Minimal
* Workflow First

Reference

* Linear
* Raycast
* Arc Browser
* Vercel

禁止：

* Cyberpunk
* Neon
* Rainbow Gradient
* Excessive Animation

---

# MVP First Principle

第一版必须围绕 Workspace 构建。

资源库只是 Workspace 的数据来源。

Workspace 才是产品核心。

---

# Phase 1

## Claude Workspace

核心模块。

用户进入：

Studio → Workspace

---

页面结构：

Project

Platform

MCP

Skills

Rules

Output

---

Project

Project Name

Example:

FlowBase

Whispr

My SaaS

---

Platform

○ Claude Code

○ Codex

○ Gemini CLI

---

MCP

☑ GitHub

☑ Filesystem

☑ Browser

☑ Playwright

☑ PostgreSQL

☑ Notion

---

Skills

☑ SEO Writer

☑ Research Agent

☑ Content Factory

☑ Code Reviewer

☑ Bug Hunter

---

Rules

☑ FlowBase Rules

☑ SEO Rules

☑ Next.js Rules

☑ Astro Rules

☑ TypeScript Rules

---

Output

Generate Project

Export ZIP

Copy Configuration

---

## Project Builder

用户选择：

MCP

Skills

Rules

后自动生成：

.claude/

CLAUDE.md

skills/

rules/

settings.json

支持：

* Download ZIP
* Copy Config
* Export Project

---

## MCP Library

作为 Workspace 数据源。

每个 MCP 包含：

* Name
* Description
* Category
* GitHub
* Install Command
* Config Example
* Use Cases
* Tags

支持：

* 搜索
* 筛选
* 收藏
* 导入 Workspace

---

## Skills Library

作为 Workspace 数据源。

每个 Skill 包含：

* Name
* Description
* Difficulty
* Tags
* Author
* Content

支持：

* 搜索
* 收藏
* 导入 Workspace
* 导出 Skill

---

## Rules Library

作为 Workspace 数据源。

支持：

* Claude Rules
* Cursor Rules
* Codex Rules

分类：

* Astro
* React
* TypeScript
* Python
* SEO
* Content

支持：

* 搜索
* 收藏
* 导入 Workspace
* 导出 Rule

---

## Global Search

支持搜索：

* MCP
* Skills
* Rules
* Workflows
* Templates

---

# Content Structure

/content

/content/mcp

/content/skills

/content/rules

/content/workflows

所有资源使用 MDX 管理。

第一版不依赖数据库。

优先静态内容驱动。

---

# Phase 2

Workflow Library

Templates

Bookmarks

User Accounts

---

Workflow Library

例如：

* Claude Code Content Factory
* GitHub Research Workflow
* SEO Workflow
* MCP Development Workflow

包含：

* 原理
* 步骤
* Prompt
* MCP需求
* Skill需求

---

Templates

包含：

* Blog
* SaaS
* Landing Page
* Telegram Bot
* AI Tool

---

# Phase 3

Local Workspace

目标：

直接连接本地 Claude Code。

支持：

* 读取 .claude
* 管理 CLAUDE.md
* 管理 Skills
* 管理 MCP
* 管理 Rules
* 同步项目

---

# Phase 4

Marketplace

允许用户提交：

* MCP
* Skill
* Rule
* Workflow
* Template

打造中文 Agent 生态社区。

---

# Success Metrics

GitHub Stars

1000+

Monthly Visits

10000+

Library Resources

MCP 200+

Skills 1000+

Rules 500+

Workflows 200+

---

# Product Tagline

Build Better AI Workflows.

The Visual Workspace for Claude Code.

中国首个 Claude Code 中文可视化工作台。
