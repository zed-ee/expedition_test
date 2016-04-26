require('lib/setup')

Spine   = require('spine')
{Stage} = require('spine.mobile')
{Panel}          = require('spine.mobile')
#Startup = require('controllers/startup')
Index = require('controllers/index')
#Question = require('controllers/question')
#Answer = require('controllers/answer')
#Results = require('controllers/results')

class App extends Stage.Global
  events:
    'tap .set_lang': 'set_lang'   
    'tap .restart': 'restart'   
  
  set_lang: (e) =>
    lang = if window.lang == 'en' then 'et' else 'en'
    top.location.href= top.location.pathname + "?" + lang
    
  restart: (e) =>
    #@navigate('/', trans: 'right')
    window.location.reload()
    
  constructor: (params)->
    lang = location.search || "?et"
    window.lang = lang.substr(1)
    super
    ##@header.append(@spectrum)
    #@app_data = params.data
    @index = new Index
    #@introLow = new Intro(mode:'low',page: 'intro', next_page: '/play_low')
    #@PlayLow = new Play('low')
    #@intro2Low = new Intro(mode:'low',page: 'intro2', next_page: '/record_low')
    #@RecordLow = new Record('low', @)
    #@IntroHigh = new Intro(mode:'high',page: 'intro', next_page: '/play_high')
    #@PlayHigh = new Play('high')
    #@intro2High = new Intro(mode:'high',page: 'intro2', next_page: '/record_high')
    #@RecordHigh = new Record('high', @)
    #@Results = new Results

    @setLang = new Panel
    @index.active()
    
    
    #@routes
    #  '/':        (params) -> @intro.active(params)
    #  '/en':        (params) -> @intro.active(params)
    #  '/et':        (params) -> @intro.active(params)
    #  '/intro_low': (params) -> @introLow.active(params)
    #  '/play_low': (params) -> @PlayLow.active(params)
    #  '/intro2_low': (params) -> @intro2Low.active(params)
    #  '/record_low': (params) -> @RecordLow.active(params)
    #  '/intro_high': (params) -> @IntroHigh.active(params)
    #  '/play_high': (params) -> @PlayHigh.active(params)
    #  '/intro2_high': (params) -> @intro2High.active(params)
    #  '/record_high': (params) -> @RecordHigh.active(params)
    #  '/results': (params) => @Results.active( 'low': @RecordLow, 'high': @RecordHigh)
       
module.exports = App