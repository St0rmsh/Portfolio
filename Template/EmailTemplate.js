export const emailTemplate = (name, email, message) => {
  const siteUrl =
    "https://portfolio-mo1djezlb-st0rmshs-projects.vercel.app";

  const siteName = "Sujit Kumar Portfolio";

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<body style="margin:0; padding:0; background-color:#eeeeec; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eeeeec; padding:48px 0;">
<tr>
<td align="center">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;">

    <!-- Top Meta -->
    <tr>
        <td style="padding:0 4px 10px;">
            <p style="margin:0; font-family:'SF Mono','Fira Code',Consolas,monospace; font-size:11px; letter-spacing:0.5px; color:#9a9a92;">
                incoming_message.log
            </p>
        </td>
    </tr>

    <!-- Main Card -->
    <tr>
        <td style="background:#ffffff; border:1px solid #e2e2dc;">

            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">

                <!-- Header -->
                <tr>
                    <td style="padding:24px 28px 20px;">
                        <p style="margin:0; font-family:Georgia,'Times New Roman',serif; font-size:20px; color:#111110;">
                            New message from your portfolio
                        </p>
                    </td>
                </tr>

                <!-- Divider -->
                <tr>
                    <td style="padding:0 28px;">
                        <div style="border-top:1px solid #ecece6;"></div>
                    </td>
                </tr>

                <!-- Sender -->
                <tr>
                    <td style="padding:20px 28px 6px;">

                        <table role="presentation" cellpadding="0" cellspacing="0">

                            <tr>
                                <td style="padding:6px 14px 6px 0; vertical-align:top;">
                                    <span style="font-family:'SF Mono','Fira Code',Consolas,monospace; font-size:12px; color:#9a9a92;">
                                        from
                                    </span>
                                </td>

                                <td style="padding:6px 0;">
                                    <span style="font-family:Georgia,serif; font-size:15px; color:#111110;">
                                        ${name}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td style="padding:6px 14px 6px 0; vertical-align:top;">
                                    <span style="font-family:'SF Mono','Fira Code',Consolas,monospace; font-size:12px; color:#9a9a92;">
                                        reply
                                    </span>
                                </td>

                                <td style="padding:6px 0;">
                                    <a
                                        href="mailto:${email}"
                                        style="font-family:Georgia,serif; font-size:15px; color:#111110; text-decoration:none; border-bottom:1px solid #d6d6d0;"
                                    >
                                        ${email}
                                    </a>
                                </td>
                            </tr>

                        </table>

                    </td>
                </tr>

                <!-- Message -->
                <tr>
                    <td style="padding:20px 28px 28px;">

                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">

                            <tr>

                                <td style="width:3px; background:#111110;"></td>

                                <td style="padding-left:16px;">

                                    <p style="
                                        margin:0;
                                        font-family:Georgia,'Times New Roman',serif;
                                        font-size:15px;
                                        line-height:1.7;
                                        color:#3a3a35;
                                        white-space:pre-wrap;
                                    ">
${message}
                                    </p>

                                </td>

                            </tr>

                        </table>

                    </td>
                </tr>

            </table>

        </td>
    </tr>

    <!-- Footer -->
    <tr>
        <td style="padding:18px 4px 0;">

            <p style="
                margin:0;
                font-family:'SF Mono','Fira Code',Consolas,monospace;
                font-size:11px;
                color:#9a9a92;
            ">
                sent via portfolio ·
                <a
                    href="${siteUrl}"
                    target="_blank"
                    style="color:#9a9a92; text-decoration:none;"
                >
                    ${siteName}
                </a>
            </p>

        </td>
    </tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;
};