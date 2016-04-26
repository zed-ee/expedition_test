Spine            = require('spine')
{Panel}          = require('spine.mobile')

class Index extends Panel
  className:
    'index'
    
  events:
    'click .button': 'next'   
  constructor: ->
    super

    @render()
  
  render: =>
    # Calculate currency conversion
    @html require('views/index/index')(@)
    
  next: (e) ->
    @log e
    @navigate('/intro', trans: 'right')
module.exports = Index