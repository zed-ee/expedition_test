Spine            = require('spine')
{Panel}          = require('spine.mobile')

class Intro extends Panel
  className:
    'intro'
    
  events:
    'click button': 'next'  
	
  constructor:() ->
    @test = 'personality'
    super
    window.points = 0
    
  render: =>
    @log @test, lang
    @html require('views/intro')(@)
    
  next: (e) ->
    @log $(e.target)
    @navigate('/quiz',@test, 0, trans: 'right')
	
  active: (params)->
      @test = params.test
      @log params
      @render()
      super
module.exports = Intro