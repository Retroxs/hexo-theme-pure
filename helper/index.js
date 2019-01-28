module.exports = function(hexo) {
    return {
      one: function(date) {
          return date + 1
      },
      toJSON : function(object) {
        console.log(object)
        return 1
        // return JSON.stringify(object);
      }
    };
  };