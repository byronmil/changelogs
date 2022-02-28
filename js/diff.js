// IDK wtf this is doing: https://stackoverflow.com/questions/42501381/compare-two-json-objects-and-just-return-another-json-object-with-only-the-chang
// Doesn't work for deep nesting
function getDifference(o1, o2) {
  var diff = {};
  var tmp = null;
  if (o1 === o2) return;

  for (var k in o1) {
    if (Array.isArray(o1[k]) && Array.isArray(o2[k])) {
      tmp = o1[k].reduce(function(p, c, i) {
        var _t = getDifference(c, o2[k][i]);
        if (_t)
          p.push(_t);
        return p;
      }, []);
      if (Object.keys(tmp).length > 0)
        diff[k] = tmp;
    } else if (typeof(o1[k]) === "object" && typeof(o2[k]) === "object") {
      tmp = getDifference(o1[k], o2[k]);
      if (tmp && Object.keys(tmp) > 0)
        diff[k] = tmp;
    } else if (o1[k] !== o2[k]) {
      diff[k] = o2[k]
    }
  }
  return diff;
}

var o1={"When": "2021-12-02 19:48:30 +0000 UTC","User": "email1@email1.com","EventTrigger": "when_page_submit","EventDataFilters": {"map": {"and": {"children": [{"attribute": {"field": "task_name","operator": "gt","value": "1"}},{"attribute": {"field": "brand_name","operator": "eq","value": "home_advisor"}}]}}},"Filters": {"and": [{"not": {"or": [{"segment": {"id": 42}}]}},{"not": {"or": [{"segment": {"id": 109}}]}}]},"ConversionAction": "Sent","ConversionWindow": "0s","ConversionSegment": {"segment": {"id": 22}},"ExitOnTriggerOrFilterNotMatched": true,"ExitOnConversionMatched": false,"ExitOnlyAfterMessage": false},
o2={"When": "2022-01-11 19:33:55 +0000 UTC","User": "email2@email2.com","EventTrigger": "when_page_submit","EventDataFilters": {"map": {"and": {"children": [{"attribute": {"field": "task_name","operator": "gt","value": "2"}},{"attribute": {"field": "brand_name","operator": "eq","value": "home_advisor"}}]}}},"Filters": {"and": [{"not": {"or": [{"segment": {"id": 46}}]}},{"not": {"or": [{"segment": {"id": 108}}]}}]},"ConversionAction": "Sent","ConversionWindow": "0s","ConversionSegment": {"segment": {"id": 14}},"ExitOnTriggerOrFilterNotMatched": true,"ExitOnConversionMatched": true,"ExitOnlyAfterMessage": false}

var d = getDifference(o1, o2)

document.getElementById('testing').innerHTML = "<pre>" + JSON.stringify(o1, null, 2) + "</pre><pre>" + JSON.stringify(o2, null, 2) + "</pre><pre>" + JSON.stringify(d, null, 2) + "</pre>";
