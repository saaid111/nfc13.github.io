async function readTag() {
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();

      try {
        await ndef.scan();
        ndef.onreading = event => {
          const decoder = new TextDecoder();
          for (const record of event.message.records) {

            if (decoder.decode(record.data) === "Apple.com") {
                let transformedCircles= 0;
             const circle = document.querySelectorAll(".circle")[transformedCircles];
             circle.style.backgroundColor = "yellow";
              transformedCircles++;
              }
            
          }
        }
      } catch(error) {
        consoleLog(error);
      }
    } else {
      consoleLog("Web NFC is not supported.");
      
    }
  }
  
  async function writeTag() {
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();
      try {
        await ndef.write("What Web Can Do Today");
        consoleLog("NDEF message written!");
      } catch(error) {
        consoleLog(error);
      }
    } else {
      consoleLog("Web NFC is not supported.");
    }
  }
  
  function consoleLog(data) {
    var logElement = document.getElementById('log');
    logElement.innerHTML += data + '\n';

  }

 