# NUX IR Patcher
This tool allows you to replace any of the 19 NUX IRs inside the firmware with custom ones.

## Supported Firmware Versions
Mighty Plug v2.1  
Mighty Plug v1.5.2  
Mighty Air v2.1  

## How to use
The tool is hosted at this link : 
https://nux-ir-loader.000webhostapp.com/  
Use the firmware *.bin file from the archive of the firmware updater from NUX website. Upload it together with any IR wave files you want to use. The IRs must be in 32bit floating point format (note that this is different from 32 bit PCM). NUX uses IRs with 2048 samples. If your files are longer or shorter they will be appended with silence/truncated. Note that I still haven't figured out whether the IRs are 1 channel 2048 samples or 2 channels 1024 samples each but the tool doesn't care and accepts both.

```diff
! Warning! Use at your own risk! This is a firmware modification tool.
! While I thoroughly tested it I can't give 100% guarantee that it won't produce corrupt firmware. 
! Using modified firmware usually voids your warranty.
```

## Donation
If you find this tool useful, you can support me at this link :) 

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate?hosted_button_id=FZWWAM4NUFRPC)
