import React from 'react'
import Navbar from '../components/common/Navbar'
import Contact from '../components/common/Contact'

function Privacy() {

  return (
    <React.Fragment>
        <Navbar/>
        <div className="bg-gradient-to-r from-cyan-600 to-green-400">
        <div className="pl-56 pr-56 p-8">
            <h3 className="text-center mb-3">PixelPulse Privacy Policy</h3>
            <p className="text-xs">At PixelPulse, we respect your privacy and are committed to protecting your personal information. <br />We collect personal data, such as your name and email address, when you create an account or contact us through our website. <br />This information is used to provide you with a personalized experience, improve our services, and communicate with you about updates and promotions. <br />We do not share your personal data with third-party companies or individuals, except as required by law or to protect our rights. <br />We use cookies and other tracking technologies to analyze website usage and improve your experience. <br />You have the right to access, correct, or delete your personal data at any time. <br />By using our website, you consent to our privacy policy and agree to our terms of service. <br />If you have any questions or concerns, please contact us at support@pixelpulse.com. <br />We will update this policy as necessary to ensure your privacy is protected.</p>
        </div>
        </div>
        <Contact/>
    </React.Fragment>
  )
}

export default Privacy
