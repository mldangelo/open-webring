const Footer = () => (
  <>
    <p />
    <hr width="600" />
    <div align="center">
      <font face="helvetica,arial" size="10px">
        <center>
          <table border="0" width="600">
            <tbody>
              <tr>
                <td>
                  Brought to you by
                  <br />
                  <a href="https://github.com/mldangelo/open-webring">
                    Open-Webring
                  </a>{' '}
                  © {new Date().getFullYear()}.
                </td>
                <td>
                  Inspired by
                  <br />
                  <a href="https://web.archive.org/web/19991013135810/http://webring.org/">
                    Webring Inc.
                  </a>{' '}
                  © 1999.
                </td>
                <td align="right">No Rights Reserved.</td>
              </tr>
            </tbody>
          </table>
        </center>
      </font>
    </div>
  </>
);

export default Footer;
