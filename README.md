# mini-tainqi
# 迷你天气

[![NPM version](https://img.shields.io/npm/v/mini-tianqi.svg?style=flat)](https://npmjs.org/package/mini-tianqi)
[![Build Status](https://travis-ci.org/tangxu2424/mini-tianqi.svg?branch=master)](https://travis-ci.org/tangxu2424/mini-tianqi)
[![NPM downloads](http://img.shields.io/npm/dm/mini-tianqi.svg?style=flat)](https://npmjs.org/package/mini-tianqi)

一个简易的命令行天气查询工具
A mini weather tool in your command line.

![image](http://img0.ph.126.net/CaQUwqKjy_gzcYhvzzwCcw==/6632133192469999113.png)
![image](http://img2.ph.126.net/ViOPDbnUfkAAccFYFBs68Q==/6632094709563029858.png)

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
- 网上参考了一个例子，然而那个例子的百度天气接口貌似用不了了
- 所以我用了心知天气的接口，[建议大家自己注册一个API密钥](https://www.seniverse.com/signup/)
- 此迷你命令行天气查询用了我的API密钥，大家记得在config文件自行修改
- 由于用的是免费版的，天气预报（3天）

[参考：smallyard的基于nodejs的终端天气查询](http://www.cnblogs.com/smallyard/p/4943648.html)