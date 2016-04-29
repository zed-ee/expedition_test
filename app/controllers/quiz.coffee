Spine            = require('spine')
{Panel}          = require('spine.mobile')

class Quiz extends Panel
  className:
    'quiz'
    
  events:
    'click li': 'next'  
	
  constructor: ->
    @test = 'personality'
    super
    @ind = 0;
  
  render: =>
    @log @test, lang
    @html require('views/quiz')(@)
    @header.html require('views/header')

    
  next: (e) ->
    @log $(e.target).data()
    window.points += $(e.target).data().points
    @log "points:", window.points
    @navigate('/answer',@test, @ind, trans: 'right')
	
  active: (params)->
      @test = params.test
      @ind = params.page
      @log params
      @render()
      super
module.exports = Quiz