// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function LicenseGen(data){

if (data.Usage ==! "N/A")
{data.Usage = data.Usage2}

if (data.License == "Apache 2.0 License")
{var licensebadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
var link = "(https://opensource.org/licenses/Apache-2.0)"}

else if (data.License == "MIT")
{var licensebadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
var link = "(https://opensource.org/licenses/MIT)"}

else if (data.License == "Mozilla")
{var licensebadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]"
var link = "(https://opensource.org/licenses/MPL-2.0)"}

else if (data.License == "IBM")
{var licensebadge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]"
var licenselink = "(https://opensource.org/licenses/IPL-1.0)"}

console.log (data.Usage)
}

function pagegen(data) {
function renderLicenseBadge(LicenseGen){
return`#${licensebadge}`}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(LicenseGen){
return`#${link}`}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(LicenseGen){
return `#${data.License}`}
// TODO: Create a function to generate markdown for README

function generateMarkdown(data){
  return `#${data.title}}`}
}

module.exports = pagegen;
