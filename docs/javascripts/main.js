const links = [
  {
    label: 'Week 01',
    url: 'weeks/week01/week01.html',
  },
  {
    label: 'Week 02 ',
    url: 'weeks/week02/week02.html',
  },
  {
    label: 'Week 03 ',
    url: 'weeks/week03/week03.html',
  },
  {
    label: 'Week 04 ',
    url: 'weeks/week04/week04.html',
  },
  {
    label: 'Week 05 ',
    url: 'weeks/week05/week05.html',
  },
  {
    label: 'Week 07 ',
    url: 'weeks/week07/week07.html',
  },
  {
    label: 'Week 08 ',
    url: 'weeks/week08/week08.html',
  },
  {
    label: 'Week 09',
    url: 'weeks/week09/week09.html',
  },
  {
    label: 'Week 10',
    url: 'weeks/week10/week10.html',
  },
  {
    label: 'Ninja Quiz',
    url: '',
  },
];

links.forEach(link);

function link(link) {
  console.log(link.label, link.url);

  document.getElementById('weeks').innerHTML +=
    '<li id="week" class="week"><a href=' +
    link.url +
    '> ' +
    link.label +
    '</a></li>';
}
