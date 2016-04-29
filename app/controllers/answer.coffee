Spine            = require('spine')
{Panel}          = require('spine.mobile')

class Quiz extends Panel
  className:
    'answer'
    
  events:
    'click button': 'next'  
    'h2 button': 'next'  
	
  constructor: ->
    @test = 'personality'
    super
    @ind = 0;
    @render()
  
  render: =>
    @log @test, lang
    @html require('views/answer')(@)
    @header.html require('views/header')

  next: (e) ->
    @log $(e.target).data()
    next_quiz = @ind + 1
    @log "next", @ind, @test, next_quiz,app_data.tests[@test][lang].questions.length
    if next_quiz < app_data.tests[@test][lang].questions.length
      @log @ind, next_quiz
      @navigate('/quiz',@test, next_quiz, trans: 'right')
    else
      @navigate('/results',@test, trans: 'right')
	
  active: (params)->
      @test = params.test
      @ind = parseInt(params.page)
      @log params
      @render()
      super
module.exports = Quiz