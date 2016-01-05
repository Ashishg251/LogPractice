
exports.index=function(req,res){
  res.render('index',{
    title:'Home',
  });
};

exports.RequestRate=function(req,res){
  res.render('RequestRate',{
    title:'Request Rate',
  });
};

exports.DataRate=function(req,res){
  res.render('DataRate',{
    title:'Data Rate',
  });
};

exports.PackageCount=function(req,res){
  res.render('PackageCount',{
    title:'Package Count',
  });
};

exports.Packages_bz2=function(req,res){
  res.render('Packages_bz2',{
    title:'Packages bz2',
  });
};

exports.PackagesRepository=function(req,res){
  res.render('PackagesRepository',{
    title:'Packages Repository',
  });
};
