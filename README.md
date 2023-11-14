# NUX IR Patcher
This tool allows you to replace any of the 19 NUX IRs inside the firmware with custom ones.

## Supported Firmware Versions
Mighty Plug v2.3, v2.2, v2.1 & v1.5.2
Mighty Air v2.3.1, v2.3, v2.2, v2.1 & v1.4.1

## How to use
The tool is hosted at this link : 
[https://tuntorius.github.io/nux-ir-patcher/](https://tuntorius.github.io/nux-ir-patcher/) 
Use the firmware *.bin file from the archive of the firmware updater from NUX website. Upload it together with any IR wave files you want to use. The IRs must be in 32bit floating point format (note that this is different from 32 bit PCM). NUX uses IRs with 2048 samples. If your files are longer or shorter they will be appended with silence/truncated.
When ready, click "Process and download". The tool will generate patched firmware. Use it to update your device with the regular firmware updater.

```diff
! Warning! Use at your own risk! This is a firmware modification tool.
! While I thoroughly tested it I can't give 100% guarantee that it won't produce corrupt firmware. 
! Using modified firmware usually voids your warranty.
```

## Donation
If you find this tool useful, you can support me by donating. 

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate?hosted_button_id=FZWWAM4NUFRPC)
