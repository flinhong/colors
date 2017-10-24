import json

def hex_to_rgb(hex):
    return tuple(int(hex[i:i+2], 16) for i in (0, 2 ,4))

cmyk_scale = 100
def rgb_to_cmyk(r,g,b):
    if (r == 0) and (g == 0) and (b == 0):
        # black
        return 0, 0, 0, cmyk_scale
    # rgb [0,255] -> cmy [0,1]
    c = 1 - r / 255.
    m = 1 - g / 255.
    y = 1 - b / 255.
    # extract out k [0,1]
    min_cmy = min(c, m, y)
    c = (c - min_cmy) / (1 - min_cmy)
    m = (m - min_cmy) / (1 - min_cmy)
    y = (y - min_cmy) / (1 - min_cmy)
    k = min_cmy

    # rescale to the range [0,cmyk_scale]
    return round(c*cmyk_scale), round(m*cmyk_scale), round(y*cmyk_scale), round(k*cmyk_scale)

with open('cn-colors-new.txt') as fo:
    for line in fo:
        line = line.replace('\n', '')
        line = line.split(', ')

        name = line[0]
        print(name)
        pinyin = line[1]
        print(pinyin)

        hex = line[2].lstrip('#')

        rgb = hex_to_rgb(hex)
        print(rgb)
        cmyk = rgb_to_cmyk(rgb[0],rgb[1],rgb[2])
        print(cmyk)
        rgb = json.dumps(rgb)
        cmyk = json.dumps(cmyk)

        text = '- name: "' + name + '"\n'
        text += '  pinyin: "' + pinyin + '"\n'
        text += '  hex: "#' + hex + '"\n'
        text += '  rgb: ' + rgb + '\n'
        text += '  cmyk: ' + cmyk + '\n'

        f = open("cn-colors-new.yml","a+")
        f.write(text+'\n')
        f.close()