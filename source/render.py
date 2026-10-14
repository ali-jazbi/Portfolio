from pathlib import Path
from playwright.sync_api import sync_playwright
D=Path(__file__).parent
ROOT=D.parent
css=(D/'styles.css').read_text(encoding='utf8')
js=(D/'ui.js').read_text(encoding='utf8')
pages=[('01-home','index.html'),('02-work','work.html'),('03-healthcare-case','healthcare.html'),('04-parin-case','parin.html'),('05-about','about.html'),('06-contact','contact.html')]
with sync_playwright() as p:
  browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
  for label,fn in pages:
    html=(D/fn).read_text(encoding='utf8')
    html=html.replace('<link rel="stylesheet" href="styles.css">','<style>'+css+'</style>')
    html=html.replace('<script src="ui.js" defer></script>','<script>'+js+'</script>')
    for group,width,height in [('desktop',1440,900),('mobile',390,844)]:
      page=browser.new_page(viewport={'width':width,'height':height},device_scale_factor=1)
      page.set_content(html,wait_until='load')
      page.evaluate('document.fonts.ready')
      dest=ROOT/group/(label+'.png')
      page.screenshot(path=str(dest),full_page=True)
      width_actual=page.evaluate('document.documentElement.scrollWidth')
      sh=page.evaluate('document.documentElement.scrollHeight')
      print(group,label, 'pixels',width,sh,'horizontal overflow',width_actual-width)
      page.close()
  browser.close()
