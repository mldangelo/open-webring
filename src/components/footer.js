const Footer = () => (
  <>
    <p />
    <hr width="600" />
    <div align="center">
      <center>
        <table border="0" width="600">
          <tbody>
            <tr>
              <td>
                <font face="helvetica,arial" size="-2">
                  Brought to you by
                  <br />
                  <a href="https://github.com/mldangelo/open-webring">
                    Open-Webring
                  </a>{' '}
                  © {new Date().getFullYear()}.
                </font>
              </td>
              <td>
                <font face="helvetica,arial" size="-2">
                  Inspired by
                  <br />
                  <a href="https://en.wikipedia.org/wiki/Webring#WebRing.com">
                    Webring Inc. © 2000
                  </a>
                  .
                </font>
              </td>
              <td align="right">
                <font face="helvetica,arial" size="-2">
                  No Rights Reserved.
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  </>
);

export default Footer;
