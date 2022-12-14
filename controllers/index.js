module.exports = {
  getIndex: (req,res)=>{
      res.render('index.hbs', {
        layout: 'main'
      })
  },
  getExhibits: (req,res)=>{
    res.render('exhibits.hbs', {
      layout: 'main'
    })
  },
  getCollections: (req,res)=>{
    res.render('collections.hbs', {
      layout: 'main'
    })
  },
  getEvents: (req,res)=>{
    res.render('events.hbs', {
      layout: 'main'
    })
  },
  getLearn: (req,res)=>{
    res.render('learn.hbs', {
      layout: 'main'
    })
  },
  getGive: (req,res)=>{
    res.render('give.hbs', {
      layout: 'main'
    })
  },
  getAbout: (req,res)=>{
    res.render('about.hbs'), {
      layout: 'main'
    }
  }
}