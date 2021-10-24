const LinksSocialMedia = {
  github: 'jonhnatalima',
  instagram: 'jonhnatalima/',
  twitter: 'JonhnataLima/',
  linkedin: 'in/jonhnata-lima/'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    if (LinksSocialMedia[social] === undefined) {
      li.setAttribute('hidden', 'hidden')
    }
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userTitle.textContent = `${data.name} - DoWhile 2021`
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
