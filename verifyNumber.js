// Send OTP to phone
app.post("/send-otp", async (req, res) => {
  const { phone } = req.body;

  try {
    await client.verify.v2.services(process.env.TWILIO_VERIFY_SID)
      .verifications.create({ to: phone, channel: "sms" });

    res.json({ success: true, message: "OTP sent to phone." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Verify OTP
app.post("/verify-otp", async (req, res) => {
  const { phone, code } = req.body;

  try {
    const check = await client.verify.v2.services(process.env.TWILIO_VERIFY_SID)
      .verificationChecks.create({ to: phone, code });

    if (check.status === "approved") {
      res.json({ success: true, message: "Phone verified." });
    } else {
      res.status(400).json({ success: false, message: "Invalid code." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
