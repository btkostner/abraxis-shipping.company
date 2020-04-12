const redirects = {
  'discord.abraxis-shipping.company': 'https://discord.gg/vy8ktHC',
  'star-citizen.abraxis-shipping.company': 'https://robertsspaceindustries.com/orgs/ASCC'
}

export default function ({ app }) {
  app.router.beforeEach((to, from, next) => {
    const hostname = window.location.hostname

    for (const key in redirects) {
      if (key === hostname) {
        window.location = redirects[key]
        return
      }
    }

    return next()
  })
}
