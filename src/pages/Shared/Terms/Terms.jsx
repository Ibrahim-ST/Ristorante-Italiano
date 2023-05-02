import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <div class="container my-5">
        <h1 class="text-center">Terms and Conditions</h1>
        <hr />
        <p>
          Welcome to our food recipe login website. By accessing our website,
          you agree to be bound by the following Terms and Conditions. Please
          read these Terms and Conditions carefully before using our website.
        </p>
        <h2>Acceptance of Terms</h2>
        <p>
          By using our website, you agree to these Terms and Conditions. If you
          do not agree to these Terms and Conditions, you may not use our
          website.
        </p>
        <h2>Use of Website</h2>
        <p>
          Our website is for your personal and non-commercial use only. You may
          not modify, copy, distribute, transmit, display, perform, reproduce,
          publish, license, create derivative works from, transfer, or sell any
          information, software, products or services obtained from our website.
        </p>
        <h2>User Accounts</h2>
        <p>
          To access certain features of our website, you may be required to
          create a user account. You are responsible for maintaining the
          confidentiality of your account and password and for restricting
          access to your computer. You agree to accept responsibility for all
          activities that occur under your account or password.
        </p>
        <h2>User Content</h2>
        <p>
          Our website allows users to submit recipes and other content. You are
          solely responsible for any content that you submit to our website. You
          represent and warrant that you have the right to submit such content
          and that it does not violate the rights of any third party. By
          submitting content to our website, you grant us a non-exclusive,
          transferable, sub-licensable, royalty-free, worldwide license to use,
          modify, publish, transmit, distribute, and display such content.
        </p>
        <h2>Intellectual Property</h2>
        <p>
          Our website and its contents are protected by copyright, trademark,
          and other laws. You may not use our website or its contents for any
          purpose without our prior written consent.
        </p>
        .<h2>Limitation of Liability</h2>
        <p>
          We will not be liable for any damages of any kind arising from the use
          of our website, including, but not limited to, direct, indirect,
          incidental, punitive, and consequential damages. You agree to
          indemnify and hold us harmless from any claim or demand, including
          reasonable attorneys' fees, made by any third party due to or arising
          out of your use of our website, your violation of these Terms and
          Conditions, or your violation of any rights of another.
        </p>
        <h2>Changes to Terms and Conditions</h2>
        <p>
          We reserve the right to modify these Terms and Conditions at any time
          without notice. By using our website, you agree to be bound by the
          current version of these Terms and Conditions.
        </p>
        <h2>Governing Law</h2>
        <p>
          These Terms and Conditions are governed by and construed in accordance
          with the laws of the state of [insert state], without giving effect to
          any principles of conflicts of law. You agree that any action at law
          or in equity arising out of or relating to these Terms and Conditions
          shall be filed only in the state or federal courts located in [insert
          county and state], and you hereby consent and submit to the personal
          jurisdiction of such courts for the purposes of litigating any such
          action.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or comments about these Terms and
          Conditions, please contact us.
        </p>
        <p>Go Back to <Link to='/register'>Register</Link></p>

      </div>
    </div>
  );
};

export default Terms;
