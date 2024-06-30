import React from 'react'
import Navbar from '../components/common/Navbar'
import Contact from '../components/common/Contact'

function Terms() {

  return (
    <React.Fragment>
        <Navbar/>
        <div className="bg-gradient-to-r from-cyan-600 to-green-400">
        <div className="sm:pl-56 sm:pr-56 p-8">
            <h3 className="text-center mb-3 font-bold">PixelPulse Terms and Conditions</h3>
            <p className="text-xs">By accessing or using PixelPulse, you agree to be bound by these Terms and Conditions, which constitute a legally binding agreement between you and PixelPulse. <br />Please read these Terms carefully, as they contain important information about your legal rights and obligations. <br />You must be at least 18 years old to use PixelPulse, and by using our services, you represent that you are of legal age and have the capacity to enter into a binding agreement. <br />PixelPulse reserves the right to modify or terminate our services at any time, without notice, and shall not be liable to you or any third party for any modification or termination. <br />You are responsible for maintaining the confidentiality and security of your account, and you agree to notify us immediately of any unauthorized use or breach of security. <br />You agree not to use PixelPulse for any illegal or unauthorized purpose, including but not limited to, copyright infringement, spamming, or phishing. <br />PixelPulse owns all intellectual property rights in and to our services, including but not limited to, trademarks, trade secrets, and copyrights. <br />You agree to indemnify and hold harmless PixelPulse, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of our services. <br />These Terms shall be governed by and construed in accordance with the laws of [State/Country], and any disputes arising from these Terms shall be resolved through binding arbitration. <br />By using PixelPulse, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. <br />If you have any questions or concerns, please contact us at support@pixelpulse.com. <br />We will update these Terms as necessary to ensure the best possible experience for our users.</p>
        </div>
        </div>
        <Contact/>
    </React.Fragment>
  )
}

export default Terms
