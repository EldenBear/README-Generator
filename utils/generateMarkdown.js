// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![badge](https://img.shields.io/badge/license-MIT-green)";
  } else if(license === "BSD") {
    return "![badge](https://img.shields.io/badge/license-BSD-blue)";
  } else{
    return "";
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://choosealicense.com/licenses/mit/";
  } else if(license === "BSD") {
    return "https://choosealicense.com/licenses/bsd-2-clause/#";
  } else{
    return "";
  }
}

// Function that returns the license section of README
function renderLicenseSection(license, name) {
  if (license === "MIT") {
    return `MIT License

    Copyright (c) [2023] [${name}]
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.`;
  } else if(license === "BSD") {
    return `BSD 2-Clause License

    Copyright (c) [2023], [${name}]
    
    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:
    
    1. Redistributions of source code must retain the above copyright notice, this
       list of conditions and the following disclaimer.
    
    2. Redistributions in binary form must reproduce the above copyright notice,
       this list of conditions and the following disclaimer in the documentation
       and/or other materials provided with the distribution.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
    SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
    CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
    OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
  } else{
    return "";
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {generateMarkdown, renderLicenseSection, renderLicenseLink,renderLicenseBadge};