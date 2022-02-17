export default {
    port: process.env.PORT || 5000,
    dbUri: process.env.DB_CONNECTION,
    accessTokenPrivateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgHpSGOatiJd+0xu3zJh6avlewlEXpNd2s2f7EVSs4xDFwNAjVg0s
LrURrk0bgINI4ucR+Y4X2YhEvRhAAlXFpl4aQDtmxG7/IPYD7lqQrBWQ1fetWPdW
JtaKEjJVLn4EWIvBTh1EXSb21nZrHfMut3socgQIOaOxjNa1e0dgfQyvAgMBAAEC
gYBc00x+UhakEOSX1kV3OP9ROq3v6Cd6M2Q2dntSbNjr84Y87XPyDyNq2X4SmdpO
xtMaU7O0NzknhjKR4pFjEdkL29445DJ2G09++g5xPm6fVzu8M+LR+7/0BJDPu46u
Sw2/NOPqo3Sf8Uj6+uJXYBEL1WBzhxCUOcFjdi2g8lbfgQJBAO67PZO8NmbrIR7o
KAR6hv9dMLk3eCReYCxLfacAetpWCJmqq0ll6q4gXdwkftMPjAYfdgCHCdEvpf0s
Xu/wnGECQQCDKzJV9tzOvmPmzEMY3Krb6GAXG3G3NsBcyJvY9nEk/FrObbLcd1Yd
M2xOoBWVEVe/UPRXixfp3jqdjotgBsMPAkEAl6vD+mlYUtjNqRor2nSR8gmd2/6e
yNRg26N2iDRo2PBR9HcW7cHfcJNFrohNPwCgoH86dClXFlzkY03eXyiJ4QJABrBX
OscB75EJ6yUTbtsh42DwNX1yyRMDsDeSqve2QVqVDt3NNyzmuUp8BW5oa1edD+aC
70vqhkSM3Kf+N4FgxQJALvgCX7g3zOJjUR/zirooJov6cu1Eaaiad4QgxpbEcfHW
zka3DkzamcN86TMEtLEXfMEIsBKtKIg/OwMuyb7ZoQ==
-----END RSA PRIVATE KEY-----`,
    accessTokenPublicKey: `-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgHpSGOatiJd+0xu3zJh6avlewlEX
pNd2s2f7EVSs4xDFwNAjVg0sLrURrk0bgINI4ucR+Y4X2YhEvRhAAlXFpl4aQDtm
xG7/IPYD7lqQrBWQ1fetWPdWJtaKEjJVLn4EWIvBTh1EXSb21nZrHfMut3socgQI
OaOxjNa1e0dgfQyvAgMBAAE=
-----END PUBLIC KEY-----`,
    refreshTokenPrivateKey: '',
    refreshTokenPublicKey: '',
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
}