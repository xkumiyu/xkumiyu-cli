'use strict'
const { h, Text } = require('ink')
const SelectInput = require('ink-select-input')
const opn = require('opn')

const open = url => opn(url, { wait: false })

const handleSelect = item => {
  if (item.url) {
    open(item.url)
  }

  if (item.action) {
    item.action()
  }
}

const items = [
  {
    label: 'Blog',
    url: 'http://www.kumilog.net/',
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/xkumiyu',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/xkumiyu',
  },
  {
    label: 'Qiita',
    url: 'http://qiita.com/xkumiyu',
  },
	{
		label: 'Kaggle',
		url: 'https://www.kaggle.com/xkumiyu'
	},
  {
    label: 'Quit',
    action() {
      process.exit()
    },
  },
]

module.exports = () => (
  <div>
    <br />
    <div>
      <Text>I’m a data scientist.</Text>
    </div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
)
