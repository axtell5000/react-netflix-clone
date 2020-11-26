import React from 'react';

import { Footer } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#" title="FAQ">FAQ</Footer.Link>
          <Footer.Link href="#" title="Investor Relations">Investor Relations</Footer.Link>
          <Footer.Link href="#" title="Ways to Watch">Ways to Watch</Footer.Link>
          <Footer.Link href="#" title="Corporate Information">Corporate Information</Footer.Link>
          <Footer.Link href="#" title="Netflix Originals">Netflix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#" title="Help Centre">Help Centre</Footer.Link>
          <Footer.Link href="#" title="Jobs">Jobs</Footer.Link>
          <Footer.Link href="#" title="Terms of Use">Terms of Use</Footer.Link>
          <Footer.Link href="#" title="Contact Us">Contact Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#" title="Account">Account</Footer.Link>
          <Footer.Link href="#" title="Redeem gift cards">Redeem gift cards</Footer.Link>
          <Footer.Link href="#" title="Privacy">Privacy</Footer.Link>
          <Footer.Link href="#" title="Speed Test">Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#" title="Media Centre">Media Centre</Footer.Link>
          <Footer.Link href="#" title="Buy gift cards">Buy gift cards</Footer.Link>
          <Footer.Link href="#" title="Cookie Preferences">Cookie Preferences</Footer.Link>
          <Footer.Link href="#" title="Legal Notices">Legal Notices</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix United Kingdom</Footer.Text>
    </Footer>
  );
}