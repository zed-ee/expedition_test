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
    @footer.html require('views/index/footer')
     
  next: (e) ->
    @log $(e.target)
    #@navigate('/intro', e.target.id, trans: 'right')
    @navigate('/intro', e.target.id, trans: 'right')
	
module.exports = Index