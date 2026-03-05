export const metadata = {
title: "AI WorkSuite",
description: "AI tools for students and professionals"
}

export default function RootLayout({ children }) {
return (
<html lang="en">
<body style={{fontFamily:"Arial, sans-serif"}}>
{children}
</body>
</html>
)
}
