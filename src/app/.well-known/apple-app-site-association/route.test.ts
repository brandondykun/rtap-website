import { GET } from './route';

it('lets every RTAP app use this site\'s passwords, as JSON', async () => {
  const res = GET();
  expect(res.headers.get('content-type')).toContain('application/json');
  expect(await res.json()).toEqual({
    webcredentials: { apps: ['UKK5HNBU26.com.eratas.rtap', 'UKK5HNBU26.com.eratas.rtap.preview', 'UKK5HNBU26.com.eratas.rtap.dev'] },
  });
});
