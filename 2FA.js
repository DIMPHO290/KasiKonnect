// Generate secret & QR
app.get("/setup-2fa", (req, res) => {
  const secret = speakeasy.generateSecret({ name: "MyApp" });

  QRCode.toDataURL(secret.otpauth_url, (err, data_url) => {
    res.json({ secret: secret.base32, qr: data_url });
  });
});

// Verify 2FA token
app.post("/verify-2fa", (req, res) => {
  const { token, secret } = req.body;

  const verified = speakeasy.totp.verify({
    secret,
    encoding: "base32",
    token,
  });

  if (verified) {
    res.json({ success: true, message: "2FA verified." });
  } else {
    res.status(400).json({ success: false, message: "Invalid token." });
  }
});
