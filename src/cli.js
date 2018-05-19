#!/usr/bin/env node
'use strict'
const path = require('path')
const meow = require('meow')
const termImg = require('term-img')
const terminalImage = require('terminal-image')
const importJsx = require('import-jsx')
const { h, render } = require('ink')

const ui = importJsx('./ui')

meow(`
	Usage
	  $ xkumiyu
`)

const fallback = async () => {
  const image = await terminalImage.file(path.join(__dirname, 'xkumiyu.png'))
  console.log(image)
}

termImg(path.join(__dirname, 'xkumiyu.png'), { fallback })

render(h(ui))
