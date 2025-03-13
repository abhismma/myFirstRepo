function createOTPSystem(){
    let OTP ,a ;
    return {
      generateOTP(){
          OTP = Math.floor(100000 + Math.random() * 900000);
          a=true;
        return `⁠ Your OTP is: ${OTP} `
      },
      getOTP(){
        if(a){
          a=false
          return OTP;
          
        }
        else{
          return "OTP expired";
        }
      }
    }
  }
  const otpSystem = createOTPSystem();  
  console.log(otpSystem.generateOTP());  
  console.log(otpSystem.getOTP());      
  console.log(otpSystem.getOTP());        
  console.log(otpSystem.generateOTP());  
  console.log(otpSystem.getOTP());      
  console.log(otpSystem.getOTP());