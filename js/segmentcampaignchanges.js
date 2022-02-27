// When importing, need to F&R curly brackets to include comma: i.e. "}{ for },{
// wrap in [] to make array

const segmentcampaignchanges =
[
  {
    "When": "2021-12-02 19:45:35 +0000 UTC",
    "User": "human@email.com",
    "SegmentTrigger": {
      "and": [
        {
          "or": [
            {
              "segment": {
                "id": 11
              }
            },
            {
              "segment": {
                "id": 12
              }
            },
            {
              "segment": {
                "id": 13
              }
            }
          ]
        }
      ]
    },
    "Filters": {
      "and": [
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 14
                }
              }
            ]
          }
        },
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 15
                }
              }
            ]
          }
        }
      ]
    },
    "ConversionAction": "Sent",
    "ConversionWindow": "0s",
    "ConversionSegment": {
      "segment": {
        "id": 14
      }
    },
    "ExitOnTriggerOrFilterNotMatched": true,
    "ExitOnConversionMatched": true,
    "ExitOnlyAfterMessage": false
  },
  {
    "When": "2022-01-06 17:20:44 +0000 UTC",
    "User": "emailaccount@human.com",
    "SegmentTrigger": {
      "and": [
        {
          "or": [
            {
              "segment": {
                "id": 11
              }
            },
            {
              "segment": {
                "id": 12
              }
            },
            {
              "segment": {
                "id": 13
              }
            }
          ]
        }
      ]
    },
    "Filters": {
      "and": [
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 14
                }
              }
            ]
          }
        },
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 15
                }
              }
            ]
          }
        }
      ]
    },
    "ConversionAction": "Sent",
    "ConversionWindow": "0s",
    "ConversionSegment": {
      "segment": {
        "id": 14
      }
    },
    "ExitOnTriggerOrFilterNotMatched": true,
    "ExitOnConversionMatched": true,
    "ExitOnlyAfterMessage": false
  },
  {
    "When": "2022-01-10 21:47:48 +0000 UTC",
    "User": "yourfriend@example.com",
    "SegmentTrigger": {
      "and": [
        {
          "or": [
            {
              "segment": {
                "id": 11
              }
            },
            {
              "segment": {
                "id": 12
              }
            },
            {
              "segment": {
                "id": 13
              }
            }
          ]
        }
      ]
    },
    "Filters": {
      "and": [
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 14
                }
              }
            ]
          }
        },
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 15
                }
              }
            ]
          }
        },
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 56
                }
              }
            ]
          }
        }
      ]
    },
    "ConversionAction": "Sent",
    "ConversionWindow": "0s",
    "ConversionSegment": {
      "segment": {
        "id": 14
      }
    },
    "ExitOnTriggerOrFilterNotMatched": true,
    "ExitOnConversionMatched": true,
    "ExitOnlyAfterMessage": false
  },
  {
    "When": "2022-01-18 22:07:33 +0000 UTC",
    "User": "emailaccount@human.com",
    "SegmentTrigger": {
      "and": [
        {
          "or": [
            {
              "segment": {
                "id": 11
              }
            },
            {
              "segment": {
                "id": 12
              }
            },
            {
              "segment": {
                "id": 13
              }
            }
          ]
        }
      ]
    },
    "Filters": {
      "and": [
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 14
                }
              }
            ]
          }
        },
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 15
                }
              }
            ]
          }
        },
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 56
                }
              }
            ]
          }
        }
      ]
    },
    "ConversionAction": "Sent",
    "ConversionWindow": "0s",
    "ConversionSegment": {
      "segment": {
        "id": 14
      }
    },
    "ExitOnTriggerOrFilterNotMatched": true,
    "ExitOnConversionMatched": true,
    "ExitOnlyAfterMessage": false
  },
  {
    "When": "2022-01-18 22:07:37 +0000 UTC",
    "User": "emailaccount@human.com",
    "SegmentTrigger": {
      "and": [
        {
          "or": [
            {
              "segment": {
                "id": 11
              }
            },
            {
              "segment": {
                "id": 12
              }
            },
            {
              "segment": {
                "id": 13
              }
            }
          ]
        }
      ]
    },
    "Filters": {
      "and": [
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 14
                }
              }
            ]
          }
        },
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 15
                }
              }
            ]
          }
        },
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 56
                }
              }
            ]
          }
        }
      ]
    },
    "ConversionAction": "Sent",
    "ConversionWindow": "0s",
    "ConversionSegment": {
      "segment": {
        "id": 14
      }
    },
    "ExitOnTriggerOrFilterNotMatched": true,
    "ExitOnConversionMatched": true,
    "ExitOnlyAfterMessage": false
  },
  {
    "When": "2022-01-18 23:02:42 +0000 UTC",
    "User": "yourfriend@example.com",
    "SegmentTrigger": {
      "and": [
        {
          "or": [
            {
              "segment": {
                "id": 11
              }
            },
            {
              "segment": {
                "id": 12
              }
            },
            {
              "segment": {
                "id": 13
              }
            }
          ]
        }
      ]
    },
    "Filters": {
      "and": [
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 14
                }
              }
            ]
          }
        },
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 15
                }
              }
            ]
          }
        }
      ]
    },
    "ConversionAction": "Sent",
    "ConversionWindow": "0s",
    "ConversionSegment": {
      "segment": {
        "id": 14
      }
    },
    "ExitOnTriggerOrFilterNotMatched": true,
    "ExitOnConversionMatched": true,
    "ExitOnlyAfterMessage": false
  },
  {
    "When": "2022-02-08 00:32:31 +0000 UTC",
    "User": "emailaccount@human.com",
    "SegmentTrigger": {
      "and": [
        {
          "or": [
            {
              "segment": {
                "id": 11
              }
            },
            {
              "segment": {
                "id": 12
              }
            },
            {
              "segment": {
                "id": 13
              }
            }
          ]
        }
      ]
    },
    "Filters": {
      "and": [
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 14
                }
              }
            ]
          }
        },
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 15
                }
              }
            ]
          }
        }
      ]
    },
    "ConversionAction": "Sent",
    "ConversionWindow": "0s",
    "ConversionSegment": {
      "segment": {
        "id": 14
      }
    },
    "ExitOnTriggerOrFilterNotMatched": true,
    "ExitOnConversionMatched": true,
    "ExitOnlyAfterMessage": false
  },
  {
    "When": "2022-02-08 00:32:40 +0000 UTC",
    "User": "emailaccount@human.com",
    "SegmentTrigger": {
      "and": [
        {
          "or": [
            {
              "segment": {
                "id": 11
              }
            },
            {
              "segment": {
                "id": 12
              }
            },
            {
              "segment": {
                "id": 13
              }
            }
          ]
        }
      ]
    },
    "Filters": {
      "and": [
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 14
                }
              }
            ]
          }
        },
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 15
                }
              }
            ]
          }
        }
      ]
    },
    "ConversionAction": "Sent",
    "ConversionWindow": "0s",
    "ConversionSegment": {
      "segment": {
        "id": 14
      }
    },
    "ExitOnTriggerOrFilterNotMatched": true,
    "ExitOnConversionMatched": true,
    "ExitOnlyAfterMessage": false
  },
  {
    "When": "2022-02-08 00:32:49 +0000 UTC",
    "User": "emailaccount@human.com",
    "SegmentTrigger": {
      "and": [
        {
          "or": [
            {
              "segment": {
                "id": 11
              }
            },
            {
              "segment": {
                "id": 12
              }
            },
            {
              "segment": {
                "id": 13
              }
            }
          ]
        }
      ]
    },
    "Filters": {
      "and": [
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 14
                }
              }
            ]
          }
        },
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 15
                }
              }
            ]
          }
        }
      ]
    },
    "ConversionAction": "Sent",
    "ConversionWindow": "0s",
    "ConversionSegment": {
      "segment": {
        "id": 14
      }
    },
    "ExitOnTriggerOrFilterNotMatched": true,
    "ExitOnConversionMatched": true,
    "ExitOnlyAfterMessage": false
  },
  {
    "When": "2022-02-08 00:32:59 +0000 UTC",
    "User": "emailaccount@human.com",
    "SegmentTrigger": {
      "and": [
        {
          "or": [
            {
              "segment": {
                "id": 11
              }
            },
            {
              "segment": {
                "id": 12
              }
            },
            {
              "segment": {
                "id": 13
              }
            }
          ]
        }
      ]
    },
    "Filters": {
      "and": [
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 14
                }
              }
            ]
          }
        },
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 15
                }
              }
            ]
          }
        }
      ]
    },
    "ConversionAction": "Sent",
    "ConversionWindow": "0s",
    "ConversionSegment": {
      "segment": {
        "id": 14
      }
    },
    "ExitOnTriggerOrFilterNotMatched": true,
    "ExitOnConversionMatched": true,
    "ExitOnlyAfterMessage": false
  },
  {
    "When": "2022-02-09 21:33:54 +0000 UTC",
    "User": "yourfriend@example.com",
    "SegmentTrigger": {
      "and": [
        {
          "or": [
            {
              "segment": {
                "id": 11
              }
            },
            {
              "segment": {
                "id": 12
              }
            },
            {
              "segment": {
                "id": 13
              }
            },
            {
              "segment": {
                "id": 73
              }
            }
          ]
        }
      ]
    },
    "Filters": {
      "and": [
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 14
                }
              }
            ]
          }
        },
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 15
                }
              }
            ]
          }
        }
      ]
    },
    "ConversionAction": "Sent",
    "ConversionWindow": "0s",
    "ConversionSegment": {
      "segment": {
        "id": 14
      }
    },
    "ExitOnTriggerOrFilterNotMatched": true,
    "ExitOnConversionMatched": true,
    "ExitOnlyAfterMessage": false
  },
  {
    "When": "2022-02-17 17:03:14 +0000 UTC",
    "User": "yourfriend@example.com",
    "SegmentTrigger": {
      "and": [
        {
          "or": [
            {
              "segment": {
                "id": 11
              }
            },
            {
              "segment": {
                "id": 12
              }
            },
            {
              "segment": {
                "id": 13
              }
            },
            {
              "segment": {
                "id": 73
              }
            }
          ]
        }
      ]
    },
    "Filters": {
      "and": [
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 14
                }
              }
            ]
          }
        },
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 15
                }
              }
            ]
          }
        }
      ]
    },
    "ConversionAction": "Received",
    "ConversionWindow": "86400s",
    "ConversionSegment": {
      "segment": {
        "id": 14
      }
    },
    "ExitOnTriggerOrFilterNotMatched": false,
    "ExitOnConversionMatched": false,
    "ExitOnlyAfterMessage": true
  },
  {
    "When": "2022-02-17 17:03:34 +0000 UTC",
    "User": "yourfriend@example.com",
    "SegmentTrigger": {
      "and": [
        {
          "or": [
            {
              "segment": {
                "id": 11
              }
            },
            {
              "segment": {
                "id": 12
              }
            },
            {
              "segment": {
                "id": 13
              }
            },
            {
              "segment": {
                "id": 73
              }
            }
          ]
        }
      ]
    },
    "Filters": {
      "and": [
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 14
                }
              }
            ]
          }
        },
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 15
                }
              }
            ]
          }
        }
      ]
    },
    "ConversionAction": "Received",
    "ConversionWindow": "86400s",
    "ConversionSegment": {
      "segment": {
        "id": 14
      }
    },
    "ExitOnTriggerOrFilterNotMatched": false,
    "ExitOnConversionMatched": false,
    "ExitOnlyAfterMessage": true
  },
  {
    "When": "2022-02-17 17:04:40 +0000 UTC",
    "User": "yourfriend@example.com",
    "SegmentTrigger": {
      "and": [
        {
          "or": [
            {
              "segment": {
                "id": 11
              }
            },
            {
              "segment": {
                "id": 12
              }
            },
            {
              "segment": {
                "id": 13
              }
            },
            {
              "segment": {
                "id": 73
              }
            }
          ]
        }
      ]
    },
    "Filters": {
      "and": [
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 14
                }
              }
            ]
          }
        },
        {
          "not": {
            "or": [
              {
                "segment": {
                  "id": 15
                }
              }
            ]
          }
        }
      ]
    },
    "ConversionAction": "Clicked",
    "ConversionWindow": "192800s",
    "ConversionSegment": {
      "segment": {
        "id": 84
      }
    },
    "ExitOnTriggerOrFilterNotMatched": true,
    "ExitOnConversionMatched": true,
    "ExitOnlyAfterMessage": true
  }
]