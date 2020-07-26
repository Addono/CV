[![pipeline status](https://gitlab.com/Addono/CV/badges/master/pipeline.svg)](https://gitlab.com/Addono/CV/commits/master)
[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)

# My Curriculum Vitae
Uses a [CI/CD pipeline](https://gitlab.com/Addono/CV/pipelines) on Gitlab to ensure that the latest version is always tested and available [here](https://cv.aknapen.nl)!

## Website
This repository also contains a small website, which can be used to show the PDF full-page in the browser. The goal of this website is to improve the experience for mobile devices, as these do not support viewing the PDF in browser. Instead, they are prompted with a button to download the PDF or are redirected to LinkedIn.

There's also a little bit to gain for desktop users, as we do now control routing we can host the PDF anywhere we want and prompt our user to navigate to the root of our deployment, e.g. https://cv.aknapen.nl instead of https://cv.aknapen.nl/cv.pdf.

The website can be found in the subdirectory `website` and is automatically deployed to Gitlab Pages together with the CV, if you decide to use that as your deployment option.

URLs and other personal details are still hardcoded, hence if you decide to reuse the website you would need to manually change them in `website/pages/index.tsx`.

### Analytics

The website supports the GPDR complient user analytics tool [GoatCounter](https://goatcounter.com/), this will automatically be enabled if you set the `GOATCOUNTER_CODE` environment variable to the name of your GoatCounter instance, e.g. I am using `addono-cv`. If you use Gitlab CI for deployment, then add the `GOATCOUNTER_CODE` under "Settings" > "CI / CD" > "Variables" and it will automatically be picked up in your next deployment.

## License

The original template used for this project is released under the Apache License 2.0 by Harshavardhan Gadgil. The website accompanying this CV is build by Adriaan Knapen and released separately under the MIT license.

