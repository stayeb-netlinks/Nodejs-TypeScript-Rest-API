// it uses default npm package
export default {
  port: 1337,
  dbUri:
    "mongodb+srv://stayeb:Stayeb@cluster0.hwtzbfj.mongodb.net/?retryWrites=true&w=majority",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgFp/ICc1yVAUcDqbAXvVNNrI78S6
CIAEFmkmiTmUAnuBgdFuDaWvuEw9nunU9WJq7HCQUMyOcHH0dpyDX7afudKSobOQ
2b/6o8qRKXi5x3s1z5Fb7N99Mh4k+eMXSVxURKPhWx/yjlgr8naSNohqXaU8oEIZ
5SMpOSzOds453AJPAgMBAAE=
-----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICWgIBAAKBgFp/ICc1yVAUcDqbAXvVNNrI78S6CIAEFmkmiTmUAnuBgdFuDaWv
uEw9nunU9WJq7HCQUMyOcHH0dpyDX7afudKSobOQ2b/6o8qRKXi5x3s1z5Fb7N99
Mh4k+eMXSVxURKPhWx/yjlgr8naSNohqXaU8oEIZ5SMpOSzOds453AJPAgMBAAEC
gYAp7v5XLPU7xjy661ikqQb02mdAIXQO3dYEo3ay14LO+BPPl897FxGvQl6Au814
7VLiVf0azGYOZ9kObVHMrfbMrtL3PhVpJ9LGHHBXYvhO7HidejGrG7niMpIh/f8b
kyv2qXHrVqvbyrKakzbzfrAVK9tbbbKLGO6bcnOuhrt+AQJBAKXAlsIlhj9yJ1tN
XvE2YmaZvzT155FXFzZlt0rJHq+65zxzStHtY7x/CYVJERXnA+yGLS6sT79BImOk
z7vALUkCQQCLxQGwHV62GlInpKIeN6gCq58Ca3WD9PD6AcoCtoQqRjbvBEBrJ/Kg
bOhH21X3ovkEsz4djILt7veGelCLyCrXAkBQ2LUwEVl/zNBBimWKxfoNDWTkEiVX
EOGzmL1kbuDW2hU7uQh/iIijQluEdXUt97ZEQdX78/QZ101MyPDCJSRxAkAxBZYD
+Skg4bZy5RFfW9H3rc4FgT8kWyKx7TK3JODSGvJlfq5BZy94CPqnSUyroGOKvHtK
zd+WKDx01C2v+TLdAkB+1VfWPuu6DhVnR3nS3VyDZD8gFCKFh1MwFceDEM3UJ91M
Z8L1UTaiVTKflgfWMbUtIuGaXVpUXHndYrVkUtS4
-----END RSA PRIVATE KEY-----`,
};
