const express = require('express')
const path = require('path')
const axios = require('axios');
const cheerio = require('cheerio');
const finviz = require('@stonksjs/finviz');
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/stock', {axios:axios,cheerio:cheerio,finviz:finviz}))
  .get('/nedspage', (req, res) => res.render('pages/nedspage'))
  .get('/arashspage', (req, res) => res.render('pages/arashspage'))
  .get('/zoespage', (req, res) => res.render('pages/zoespage'))
  .get('/yusufspage', (req, res) => res.render('pages/yusufspage'))
  .get('/hongzespage', (req, res) => res.render('pages/hongzespage'))
  .get('/index', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
