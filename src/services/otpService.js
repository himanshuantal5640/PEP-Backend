export const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
export const saveOtp = async (email,otp) => {
    await Otp.findOneAndUpdate(
        {email},
        {otp,expiresAt:Date.now() + 10*60*1000},
        {upsert:true,new:true}
    );
    const expireAt
}