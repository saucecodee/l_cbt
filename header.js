//===============================================================================
//                  Require modules                                            //
//===============================================================================

//========== require global variables ==========
const config = require('./config');


//===============================================================================
//                  Header functiom                                            //
//===============================================================================

function header(title, msg) {
     console.clear();

     var table = new config.Table({
          chars: { 'top': '═', 'top-left': '╔', 'top-right': '╗', 'bottom': '═', 'bottom-left': '╚', 'bottom-right': '╝', 'left': '║', 'right': '║' },
          head: [title],
          colWidths: [72],
          colAligns: ['middle']
     });
     console.log(table.toString());

     if (msg.length < 1) {
          console.log();
     } else {
          console.log();
          console.log(config.colors.red('=> '), msg)
          console.log()
     }
}

module.exports = header