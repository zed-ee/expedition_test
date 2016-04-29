Spine            = require('spine')
{Panel}          = require('spine.mobile')

class Quiz extends Panel
  className:
    'answer'
    
  events:
    'click button': 'next'  
	
  constructor: ->
    @test = 'personality'
    super
    @ind = 0;
    @render()
  
  render: =>
    @log @test, lang
    @html require('views/'+@test+'/answer')(@)
    @header.html require('views/header')

  next: (e) ->
    @log $(e.target).data()
    next_quiz = @ind++
    if app_data.tests[next_quiz]
      @navigate('/quiz',@test, next_quiz, trans: 'right')
    else
      @navigate('/results',@test, trans: 'right')
	
  active: (params)->
      @test = params.test
      @ind = params.page
      @log params
      @render()
      super
module.exports = Quiz