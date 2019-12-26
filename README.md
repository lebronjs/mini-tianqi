# mini-tianqi
# 迷你天气

[![NPM version](https://img.shields.io/npm/v/mini-tianqi.svg?style=flat)](https://npmjs.org/package/mini-tianqi)
[![Build Status](https://travis-ci.org/tangxu2424/mini-tianqi.svg?branch=master)](https://travis-ci.org/tangxu2424/mini-tianqi)
[![NPM downloads](http://img.shields.io/npm/dm/mini-tianqi.svg?style=flat)](https://npmjs.org/package/mini-tianqi)

一个简易的命令行天气查询工具
A mini weather tool in your command line.

![img](https://user-images.githubusercontent.com/17759321/71463089-40bd3f00-27f0-11ea-9914-3cbed57e3bb2.png)
![img](https://user-images.githubusercontent.com/17759321/71463246-b0332e80-27f0-11ea-90a8-54e3a7d643cd.png)

---

## Installation

```bash
$ npm install mini-tianqi -g
```

## Usage

#### 1. Query local weather

```bash
$ mini-tianqi
```

#### 2. Query weather by city name

```bash
$ mini-tianqi 上海
$ mini-tianqi shanghai
```

## Postscript:
- 网上参考了smallyard的《基于nodejs的终端天气查询》例子，然而那个例子的百度天气接口貌似用不了了
- 所以我用了心知天气的接口，[建议大家自己注册一个API密钥](https://www.seniverse.com/signup/)
- 此迷你命令行天气查询用了我的API密钥，大家记得在config文件自行修改
- 由于用的是免费版的，天气预报（3天）
