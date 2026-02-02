const major = parseInt(process.versions.node.split('.')[0], 10);


function finish() {
  console.clear()

  console.log(
    color.bold + color.orange +
    "\n\nThank you for using @felixparadox/baileys\n" +
    color.reset
  )

  console.log(
    color.white +
    "This library is developed with a structured and efficient approach\n" +
    "to support stable, scalable, and maintainable system development.\n" +
    color.reset
  )

  console.log(
    color.gray + "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" + color.reset
  )

  console.log(
    color.bold + color.orange + "㊋ Bailes Felix Hasgawa" + color.reset
  )
  console.log(
    color.bold + color.white + "㊋ Base Bailes By: " +
    color.reset + color.blue + "Felix Hasgawa" + color.reset
  )
  console.log(
    color.bold + color.white + "㊋ Version      : " +
    color.reset + color.green + "1.0.1" + color.reset
  )

  console.log(
    color.gray + "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" + color.reset
  )
}
if (major < 20) {
  console.error(
    `\n❌ This package requires Node.js 20+ to run reliably.\n` +
    `   You are using Node.js ${process.versions.node}.\n` +
    `   Please upgrade to Node.js 20+ to proceed.\n`
  );
  process.exit(1);
}