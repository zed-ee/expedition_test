Spine            = require('spine')
{Panel}          = require('spine.mobile')

class Quiz extends Panel
  className:
    'result'
    
  events:
    'click button': 'next'  
	
  constructor: ->
    @test = 'personality'
    super
    @render()
  
  render: =>
    @log @test, lang
    @html require('views/results')(@)

    @header.html require('views/header')

    
  next: (e) ->
    @log $(e.target).data()

  active: (params)->
      @test = params.test
      @log params
      @render()
      super
module.exports = Quiz